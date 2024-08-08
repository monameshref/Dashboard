//! ******************************* Navbar Image *******************************//
const dropdown = document.querySelector(".navbar ul");
const image = document.querySelector(".navbar img");

image.addEventListener("click", function () {
  dropdown.classList.toggle("d-none");
});

document.addEventListener("click", function (e) {
  if (e.target !== image) {
    if (e.target !== dropdown) {
      if (!dropdown.classList.contains("d-none")) {
        dropdown.classList.add("d-none");
      }
    }
  }

  // Content Data
  allMenu.forEach((item) => {
    const icon = item.querySelector("main section .data .card .dots");
    const menuLink = item.querySelector(
      "main section .data .card .dropdown-dots"
    );

    if (e.target !== icon) {
      if (e.target !== menuLink) {
        if (!menuLink.classList.contains("d-none")) {
          menuLink.classList.add("d-none");
        }
      }
    }
  });
});

//! ******************************* Aside Dropdown *******************************//
const allDropdown = document.querySelectorAll("#sidebar .dropdown");

allDropdown.forEach((item) => {
  const a = item.parentElement.querySelector("a:first-child");

  a.addEventListener("click", function (e) {
    if (!this.classList.contains("active")) {
      allDropdown.forEach((i) => {
        const link = i.parentElement.querySelector("a:first-child");

        link.classList.remove("active");
        i.classList.remove("show");

        document.querySelectorAll("#sidebar ul li .arrow").forEach((arrow) => {
          arrow.classList.replace("fa-chevron-right", "fa-chevron-down");
        });
      });
    } else {
      document.querySelectorAll("#sidebar ul li .arrow").forEach((arrow) => {
        arrow.classList.replace("fa-chevron-down", "fa-chevron-right");
      });
    }
    this.classList.toggle("active");
    item.classList.toggle("show");
  });
});

//! ******************************* Aside Menu *******************************//
const btnMenu = document.querySelector('.navbar button');
const sidebar = document.getElementById("sidebar");
const content = document.getElementById("content");

btnMenu.addEventListener('click',function(){
    sidebar.classList.toggle('hide');

    if (sidebar.classList.contains('hide')) {
        content.style.cssText = `
            width: calc(100% - 62px);
            left: 62px;
        `
    }
    else {
        content.style.cssText = `
            width: calc(100% - 16.25rem);
            left: 16.25rem;
        `
    }
});

//! ******************************* Content Data *******************************//
const allMenu = document.querySelectorAll("main section .data .card .menu");

allMenu.forEach((item) => {
  const icon = item.querySelector("main section .data .card .dots");
  const menuLink = item.querySelector("main section .data .card .dropdown-dots");

  icon.addEventListener("click", function () {
    menuLink.classList.toggle("d-none");
  });
});

//! ******************************* Content ApexCharts *******************************//
var options = {
  series: [
    {
      name: "series1",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "series2",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ],
  chart: {
    height: 350,
    type: "area",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    type: "datetime",
    categories: [
      "2018-09-19T00:00:00.000Z",
      "2018-09-19T01:30:00.000Z",
      "2018-09-19T02:30:00.000Z",
      "2018-09-19T03:30:00.000Z",
      "2018-09-19T04:30:00.000Z",
      "2018-09-19T05:30:00.000Z",
      "2018-09-19T06:30:00.000Z",
    ],
  },
  tooltip: {
    x: {
      format: "dd/MM/yy HH:mm",
    },
  },
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
