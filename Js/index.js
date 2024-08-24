// Datos del currículum
const curriculum = {
    datosPersonales: {
        nombre: "Minor Solano Camacho",
        edad: "31",
        correo: "misolano1192@gmail.com",
        telefono: "+506 70418029",
        sobreMi: "Soy una persona apasionada por las tecnologías y el desarrollo web, siempre buscando aprender y mejorar mis habilidades. Actualmente, estudio Desarrollo Web en Virtual Learning of America y en Alura LATAM, ambos enfocados en Front End. Mi objetivo es convertir mi pasión en una carrera profesional, creando soluciones innovadoras y eficientes"
    },
    estudios: [
        {
            titulo: "Desarrollo Web",
            institucion: "Alura Latam",
            anio: "Cursando"
        },
        {
            titulo: "Desarrollo Web",
            institucion: "Virtual Learnig of America",
            anio: "Cursando"
        },
        {
            titulo: "IT ESSENTIALS Y CISCO CCNA",
            institucion: "Universidad Juan Pablo ll",
            anio: "2023"
        },
        {
            titulo: "Tacnico en mantenimiento y reparación de computadoras",
            institucion: "Instituto Cosvic",
            anio: "2014"
        },
        // Añade más estudios aquí
    ],
    experiencias: [
        {
            puesto: "Analista de expedientes",
            empresa: "Tribunal Supremo de Elecciones",
            periodo: "2023-Actualidad",
            descripcion: "Encargado de analizar y corroborar información de los expediente en tramite "
        },
        {
            puesto: "Oficial de Seguridad",
            empresa: "Tribunal Supremo de Elecciones",
            periodo: "2019-2023",
            descripcion: "Encargado de velar por la seguridad de funcionarios, usuarios y bienes de la institución "
        },
        {
            puesto: "Vendedor",
            empresa: "Capris",
            periodo: "2017-2017",
            descripcion: "Vendedor y callcenter "
        },
        {
            puesto: "Administrador",
            empresa: "Ferretería Dulce Nombre",
            periodo: "2012-2016",
            descripcion: "Administrador general de la ferreteria, encargado del nequipo de trabajo "
        },
        // Añade más experiencias aquí
    ],
    repositorios: [
        {
            nombre: "Nombre del Proyecto",
            descripcion: "Breve descripción del proyecto",
            link: "https://github.com/tu-usuario/nombre-del-repo"
        },
        
        // Añade más repositorios aquí
    ]
};

// Función para cargar los datos personales
function cargarDatosPersonales() {
    document.getElementById('nombre').textContent = curriculum.datosPersonales.nombre;
    document.getElementById('edad').textContent = curriculum.datosPersonales.edad;
    document.getElementById('correo').textContent = curriculum.datosPersonales.correo;
    document.getElementById('telefono').textContent = curriculum.datosPersonales.telefono;
    document.getElementById('sobreMi').textContent = curriculum.datosPersonales.sobreMi;
}

// Función para cargar los estudios
function cargarEstudios() {
    const contenedor = document.getElementById('estudios-container');
    curriculum.estudios.forEach(estudio => {
        const div = document.createElement('div');
        div.className = 'education-item';
        div.innerHTML = `
            <h3>${estudio.titulo}</h3>
            <p>${estudio.institucion}</p>
            <p>${estudio.anio}</p>
        `;
        contenedor.appendChild(div);
    });
}

// Función para cargar la experiencia
function cargarExperiencia() {
    const contenedor = document.getElementById('experiencia-container');
    curriculum.experiencias.forEach(exp => {
        const div = document.createElement('div');
        div.className = 'experience-item';
        div.innerHTML = `
            <h3>${exp.puesto}</h3>
            <p>${exp.empresa}</p>
            <p>${exp.periodo}</p>
            <p>${exp.descripcion}</p>
        `;
        contenedor.appendChild(div);
    });
}

// Función para cargar los repositorios
function cargarRepositorios() {
    const contenedor = document.getElementById('repositorios-container');
    curriculum.repositorios.forEach(repo => {
        const div = document.createElement('div');
        div.className = 'repository-item card mb-3';
        div.innerHTML = `
            <div class="card-body">
                <h3 class="card-title">${repo.nombre}</h3>
                <p class="card-text">${repo.descripcion}</p>
                <a href="${repo.link}" class="btn btn-primary" target="_blank">Ver Proyectos</a>
            </div>
        `;
        contenedor.appendChild(div);
    });
}

// Función para cargar el contenido según la página actual
function cargarContenido() {
    const path = window.location.pathname;
    if (path.includes('index.html') || path === '/') {
        cargarDatosPersonales();
    } else if (path.includes('estudios.html')) {
        cargarEstudios();
    } else if (path.includes('experiencia.html')) {
        cargarExperiencia();
    } else if (path.includes('proyectos.htm')) {
        cargarRepositorios();
    }
}

// Ejecutar cargarContenido cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', cargarContenido);