const tasks = [
    {
        title: "Reading",
        description: "I have to read Programming with Javascript",
        date: new Date().toLocaleString()
    },
    {
        title: "Workout",
        description: "Complete 1 hour gym session",
        date: new Date().toLocaleString()
    },
    {
        title: "Assignment",
        description: "Finish DBMS assignment before deadline",
        date: new Date().toLocaleString()
    },
    {
        title: "Project",
        description: "Work on React To-Do webapp project",
        date: new Date().toLocaleString()
    },
    {
        title: "Shopping",
        description: "Buy groceries and daily essentials",
        date: new Date().toLocaleString()
    }
];

const tasksId = document.getElementById('tasks');
const textarea = document.getElementById('desc');

const addButton = document.getElementById("add-btn-main");
const formDiv = document.getElementById("form-div");
const addButtonForm = document.getElementById("add-btn-form");
const cancelBtn = document.getElementById("cancel-btn");
const closeBtn = document.getElementById("close-btn");

const titleInput = document.getElementById("title");
const descInput = document.getElementById("desc");



const showTasks = () => {

    tasksId.innerHTML = '';

    tasks.forEach((item,index) => {

        const row = document.createElement('div');
        
        row.className = `
        grid grid-cols-4 place-items-center
        bg-white/10 hover:bg-white/20
        transition duration-300
        rounded-xl px-5 py-4
        border border-white/10
        shadow-md text-white
        `;

        row.innerHTML = `
            <p>${item.title}</p>

            <details class="w-full justify-self-start">
                <summary class="cursor-pointer truncate">
                    ${item.description.slice(0,40)}...
                </summary>

                <p class="mt-2 break-words">
                    ${item.description}
                </p>
            </details>

            <p>${item.date}</p>

            <button class="delete-btn bg-red-900 w-[50%]
                hover:bg-red-700
                px-2 py-2
                rounded-lg
                transition duration-300
                cursor-pointer">
                Delete
            </button>
        `;

        tasksId.appendChild(row);

        const deleteBtn = row.querySelector('.delete-btn');

        deleteBtn.addEventListener('click', () => {

            tasks.splice(index,1);

            showTasks();

        });
    });
};

showTasks();


textarea.addEventListener('input', function () {

    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';

});


addButton.addEventListener('click', () => {

    formDiv.classList.remove('hidden');

});


cancelBtn.addEventListener('click', () => {

    formDiv.classList.add('hidden');

});

closeBtn.addEventListener('click', () => {

    formDiv.classList.add('hidden');

});


addButtonForm.addEventListener('click', (e) => {

    e.preventDefault();

    if(titleInput.value.trim().length < 2){
        alert("Title too short");
        return;
    }

    if(descInput.value.trim().length < 20){
        alert("Description must be at least 20 characters");
        return;
    }

    tasks.push({
        title: titleInput.value,
        description: descInput.value,
        date: new Date().toLocaleString()
    });

    showTasks();

    titleInput.value = '';
    descInput.value = '';
    descInput.style.height = 'auto';

    formDiv.classList.add('hidden');
});