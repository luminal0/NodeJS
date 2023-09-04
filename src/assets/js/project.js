let projects = []

function addProject(event) {
    event.preventDefault()

    let title = document.getElementById("input-project-title").value
    let startDate = document.getElementById("input-project-startDate").value
    let endDate = document.getElementById("input-project-endDate").value
    let content = document.getElementById("input-project-content").value
    let image = document.getElementById("input-project-image").file

    image = URL.createObjectURL(image.files[0])
    console.log(image);

    let start = new Date(startDate);
    let end = new Date(endDate);
  
    if (start > end) {
      return alert("You Fill End Date Before Start Date");
    }
  
    let difference = end.getTime() - start.getTime();
    let days = difference / (1000 * 3600 * 24);
    let weeks = Math.floor(days / 7);
    let months = Math.floor(weeks / 4);
    let years = Math.floor(months / 12);
    let duration = "";
  
    if (days > 0) {
      duration = days + "day";
    }
    if (weeks > 0) {
      duration = weeks + "week";
    }
    if (months > 0) {
      duration = months + "month";
    }
    if (years > 0) {
      duration = years + " year";
    }
    let project = {
      title,
      duration,
      content,
      image,
    };
  
    dataBlog.push(project);
    console.log(dataProject);
  
    renderBlog();
  }
  
  function renderProject() {
      document.getElementById("contents").innerHTML = "";
      for (let index = 0; index < dataProject.length; index++) {
          document.getElementById("contents").innerHTML += `
                  <div class="container-card">
                      <div class="card-content">
                          <img src="${dataProject[index].image}" alt="picture">
                          <h1>
                              <a href="project-detail.html" target="_blank">
                              ${dataBlog[index].title}
                              </a>
                          </h1>
                          <p>durasi : ${dataProject[index].duration}</p>
                          <div id="container-desc">
                          ${dataProject[index].content}
                          </div>
                          <div>
                            <i class="fa-brands fa-x-twitter"></i>
                            <i class="fa-brands fa-twitch"></i>
                            <i class="fa-brands fa-bitcoin"></i>
                          </div>
                          <div class="btn-group">
                          <button class="btn-edit">Edit</button>
                          <button class="btn-post">Delete</button>
                          </div>
                      </div>
                  </div>
          `
      }
  }