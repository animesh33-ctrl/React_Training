# React Optimization TODO Lab

This project is a student lab starter for React optimization techniques.

## Objective

Students must analyze rendering behavior and optimize the app using:

- useMemo
- useCallback
- React.memo
- React.lazy
- Suspense
- controlled component optimization
- optional debounced search

## Tasks

1. Analyze unnecessary re-renders using console logs.
2. Optimize filtered and sorted data using useMemo.
3. Convert handlers to useCallback.
4. Wrap suitable child components with React.memo.
5. Lazy load heavy components.
6. Split the form into smaller optimized fields.
7. Optionally implement debounced search.

## Run

```bash
npm install
npm run dev
```

# React Optimization TODO Lab — Solution

Neighborhood Service Request Dashboard, optimized per lab objectives. Below is a breakdown of every change made from the starter code.

## 1. `useMemo` — Expensive Derived Data

**`App.jsx`** — `filteredRequests`

- Original: filter ran on every render; status filter + sort ran _outside_ memoization (recomputed on every state change, even unrelated ones like form input).
- Fixed: filter, status filter, and sort all combined into a single `useMemo` with correct deps `[requests, searchText, statusFilter, sortBy]`. Sort now runs on a copy (`[...result]`) instead of mutating the memoized array.

**`SummaryCards.jsx`**

- Original: `total`, `openCount`, `resolvedCount`, `highPriority` recalculated with 4 separate `.filter()` passes on every render.
- Fixed: single `useMemo` with one `.reduce()` pass, recomputes only when `requests` changes.

**`AnalyticsPanel.jsx`**

- Original: intentionally heavy — looped 50,000 times recomputing `categoryCounts` on every render.
- Fixed: replaced with a single `.reduce()` wrapped in `useMemo`, dep `[requests]`. Computation now runs only when `requests` actually changes.

## 2. `useCallback` — Stable Handler References

- `handleViewDetails`, `handleInputChange`, `handleStatusFilter`, `handleSortFilter`, `handleSearch` — all wrapped with empty deps `[]` (no external deps needed).
- `handleFormSubmit` — wrapped with dep `[formData]`.
- `handleResolve` — wrapped with `[]` deps **and** rewritten to use the functional updater `setRequests((prev) => ...)`. This also fixes a stale-closure bug in the original (where `requests` was captured once at mount, causing resolved status to be lost on repeated clicks).

## 3. `React.memo` — Prevent Unnecessary Re-renders

Wrapped the following components:

- `SearchBar`
- `FilterPanel`
- `RequestList`
- `RequestCard`
- `SummaryCards`
- `AnalyticsPanel`
- `ReportPanel`
- `RequestForm`
- `FormField` (new)
- `SelectField` (new)

Combined with stable `useCallback` props from `App.jsx`, these no longer re-render on unrelated state changes (e.g. typing in the form no longer re-renders `RequestList`, `SummaryCards`, etc.).

## 4. `React.lazy` + `Suspense` — Code Splitting

- `AnalyticsPanel` and `ReportPanel` converted to lazy-loaded chunks:

```js
const AnalyticsPanel = lazy(() => import("./components/AnalyticsPanel"));
const ReportPanel = lazy(() => import("./components/ReportPanel"));
```

- Each wrapped in its own `<Suspense fallback={...}>` with a loading message, so they load as separate bundles and don't block initial render.

## 5. Form Split & Controlled Component Optimization

- Extracted two new reusable, memoized field components:
  - **`FormField.jsx`** — handles `text`, `date`, and `textarea` inputs.
  - **`SelectField.jsx`** — handles dropdowns, takes an `options` array + `placeholder`.
- `RequestForm.jsx` now composes these instead of inlining raw `<input>`/`<select>`/`<textarea>` elements, with category/priority options extracted to constants (`CATEGORY_OPTIONS`, `PRIORITY_OPTIONS`).
- Because each field is memoized and `onChange`/`onSubmit` are stable (`useCallback`), editing one field no longer triggers re-renders of sibling fields.


```
