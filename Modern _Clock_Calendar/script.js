// CLOCK
function updateClock() {
    const now = new Date();
    document.getElementById("clock").innerText = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

// DATE
function updateDate() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById("date").innerText =
        now.toLocaleDateString(undefined, options);
}
updateDate();

// CALENDAR
let currentDate = new Date();

function renderCalendar() {
    const grid = document.getElementById("calendarGrid");
    const monthYear = document.getElementById("monthYear");

    grid.innerHTML = "";

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    const monthNames = [
        "January","February","March","April","May","June",
        "July","August","September","October","November","December"
    ];

    monthYear.innerText = `${monthNames[month]} ${year}`;

    // Day names
    const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    days.forEach(day => {
        const div = document.createElement("div");
        div.classList.add("day-name");
        div.innerText = day;
        grid.appendChild(div);
    });

    // Empty boxes
    for (let i = 0; i < firstDay; i++) {
        grid.appendChild(document.createElement("div"));
    }

    // Dates
    const today = new Date();

    for (let day = 1; day <= lastDate; day++) {
        const div = document.createElement("div");
        div.classList.add("day");

        if (
            day === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear()
        ) {
            div.classList.add("today");
        }

        div.innerText = day;
        grid.appendChild(div);
    }
}

function prevMonth() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
}

function nextMonth() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
}

renderCalendar();

// THEME
function toggleTheme() {
    document.body.classList.toggle("light");
}