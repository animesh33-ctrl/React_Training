Form   ----> Formik+Yup



1)install = npm install formik yup



2)create initialValues

&#x09;const initialValues = {

&#x20; 		title: "",

&#x20; 		category: "",

&#x20; 		roomNumber: "",

&#x20; 		priority: "",

&#x20; 		description: "",

&#x09;};



3)create yup schema

&#x09;const validationSchema = Yup.object({

&#x20; 		title: Yup.string().required("Title is required"),



&#x20; 		category: Yup.string().required("Category is required"),



&#x20; 		roomNumber: Yup.string().required(

&#x20;   			"Room Number is required"

&#x20;		),



&#x20; 		priority: Yup.string().required(

&#x20;   			"Priority is required"

&#x20; 		),



&#x20; 		description: Yup.string()

&#x20;   			.min(10)

&#x20;   			.required("Description is required"),

&#x09;});



4\) create handleOnSubmit

&#x09;const handleOnSubmit = (values, { resetForm }) => {

&#x20;   		console.log(values);



&#x20;   		alert("Request Submitted Successfully");



&#x20;   		resetForm();

&#x20; 	};



5\) wrap form with formic

&#x09;<Formik

&#x20; 	initialValues={initialValues}

&#x20; 	validationSchema={validationSchema}

&#x20; 	onSubmit={(values) => {

&#x20;   	console.log(values);

&#x20; 	}}

&#x09;>



6\) replace form with formic form

&#x09;import {Form} from "formik" 

&#x09;<form> ---> <Form>



7\) replace input fields with  Field

Import:

&#x09;import { Field } from "formik"; 

Normal:

&#x09;<input

&#x20; 	name="title"

&#x20; 	value={data.title}

&#x20; 	onChange={handleChange}

&#x09;/>



Formik:

&#x09;<Field

&#x20; 	type="text"

&#x20; 	name="title"

&#x09;/>



8\) replace select

Normal:

&#x09;<select

&#x20; 	name="category"

&#x20; 	value={data.category}

&#x20; 	onChange={handleChange}

&#x09;>

Formik:

&#x09;<Field

&#x20; 	as="select"

&#x20; 	name="category"

&#x09;>



9\) replace textarea

Normal:

&#x09;<textarea

&#x20; 	value={data.description}

&#x20; 	onChange={handleChange}

&#x09;/>



Formik:

&#x09;<Field

&#x20; 	as="textarea"

&#x20; 	name="description"

&#x09;/>



10\) 

