function getCity(city) {
    return `<tr>
<td>${city.id}</td>
<td>${city.name}</td>
<td>${city.country.name}</td>
<td>${city.area} km2</td>
<td>${city.population}</td>
<td>${city.gdp} $ / người</td>
<td>${city.description}</td>
<td><button  onclick="showInforPage(${city.id})" >Xem</button></td>
<td><button onclick="deleteCity(${city.id})">Xóa</button></td>
<td><button type="button" data-bs-toggle="modal" data-bs-target="#updateModal" onclick="showUpdateForm(${city.id})">Sửa</button></td>
</tr>`
}

function showAll() {
    $.ajax({
        type: "GET",
        url: `http://localhost:8080/api/cities`,
        success: function (data) {
            let content = `<table border="1" style="width: 1000px;margin: auto;text-align: center">
<tr>
<td>ID</td>
<td>Tên Thành Phố</td>
<td>Quốc gia</td>
<td>Diện tích</td>
<td>Dân số</td>
<td>GDP</td>
<td>Giới thiệu</td>
<td>Thao tác</td>
</tr>`
            for (let i = 0; i < data.length; i++) {
                content += getCity(data[i])
            }
            content += `</table>`
            document.getElementById("cityList").innerHTML = content
        }
    });
}

function createCity() {
    let nameCity = document.getElementById("name").value;
    let area = document.getElementById("area").value;
    let population = document.getElementById("population").value;
    let gdp = document.getElementById("gdp").value;
    let description = document.getElementById("description").value;
    let countryId = document.getElementById("countryId").value;

    let City = {
        name: nameCity,
        area: area,
        population: population,
        gdp: gdp,
        description: description,
        country: {
            id: countryId
        }
    }
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: 'http://localhost:8080/api/cities',
        type: 'POST',
        data: JSON.stringify(City),
        success: function () {
            alert("Tạo mới thành phố thành công ");
            window.location.reload();
        }
    })
}

function getSelectCountry(country) {
    return `<option value="${country.id}">${country.name}</option>`
}

function showAllSelectcountry() {
    $.ajax({
        type: "GET",
        url: `http://localhost:8080/api/countries`,
        success: function (data) {
            let content = `<select id="countryId">`

            for (let i = 0; i < data.length; i++) {
                content += getSelectCountry(data[i])
            }
            content += `</select>`
            document.getElementById("selectCountry").innerHTML = content
        }
    });
}


function showAllSelectcountryUpdate() {
    $.ajax({
        type: "GET",
        url: `http://localhost:8080/api/countries`,
        success: function (data) {
            let content = `<select id="countryId-u">`

            for (let i = 0; i < data.length; i++) {
                content += getSelectCountry(data[i])
            }
            content += `</select>`
            document.getElementById("selectCountry-u").innerHTML = content
        }
    });
}

let updateId;

function showUpdateForm(id) {
    showAllSelectcountryUpdate()
    $.ajax({
        type: "GET",
        url: `http://localhost:8080/api/cities/` + id,
        success: function (data) {
            updateId = data.id;

            document.getElementById("name-u").value = data.name;
            document.getElementById("area-u").value = data.area;
            document.getElementById("population-u").value = data.population;
            document.getElementById("gdp-u").value = data.gdp;
            document.getElementById("description-u").value = data.description;
        }
    });

}

function updateCity() {
    let nameCity = document.getElementById("name-u").value;
    let area = document.getElementById("area-u").value;
    let population = document.getElementById("population-u").value;
    let gdp = document.getElementById("gdp-u").value;
    let description = document.getElementById("description-u").value;
    let countryId = document.getElementById("countryId-u").value;

    let City = {
        name: nameCity,
        area: area,
        population: population,
        gdp: gdp,
        description: description,
        country: {
            id: countryId
        }
    }
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: 'http://localhost:8080/api/cities/' + updateId,
        type: 'PUT',
        data: JSON.stringify(City),
        success: function () {
            alert("Sửa thành phố thành công ");
            window.location.reload();
        }
    })

}

function deleteCity(id) {
    if (confirm("Bạn chắc chắn muốn xóa?")) {
        $.ajax({
            type: "DELETE",
            url: `http://localhost:8080/api/cities/` + id,
            success: function () {
                alert("Xóa thành công");
                window.location.reload();
            }
        });
    }
}

function showInforPage(id) {
    window.location.href = "view.html?id=" + id
}

function showOne() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    $.ajax({
        type: "GET",
        url: `http://localhost:8080/api/cities/` + id,
        success: function (data) {
            let content = `<table border="1" style="width: 700px;margin: auto">
           <tr>
           <td>Tên</td>
           <td>${data.name}</td>
           </tr>
           <tr>
            <td>Quốc gia</td>
           <td>${data.country.name}</td>
          </tr>
           <tr>
            <td>Diện tích</td>
           <td>${data.area}</td>
            </tr>
           <tr>
            <td>Dân số</td>
           <td>${data.population}</td>
            </tr>
           <tr>
            <td>GDP</td>
           <td>${data.gdp}</td>
              </tr>
              <tr>
            <td>Giới thiệu</td>
        
           <td>${data.description}</td>
        
           </tr>
             <tr>
            <td><button onclick="backToHome()">Về trang chủ</button></td>
           </tr>
    </table>`
            document.getElementById("view").innerHTML = content;
        }
    });
}

function backToHome() {
    window.location.href = "home.html"
}