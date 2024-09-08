/**
 * Object that contains the routes on the navBar on the user page
 */
export const navigation = [
    { name: 'Inicio', href: '/', current: false },
    { name: 'Nosotros', href: '/nosotros', current: false },
    { name: 'Servicios', href: '/servicios', current: false }
]
/**
 * Object that contains the routes on the sideBar operator
 */
export const operatorNavigation = [
    { name: 'Urgencias', href: '/management/urgencias'},
    { name: 'Agendamiento de Citas', href: '/management/agendamiento'},
    { name: 'Reagendamiento de citas', href: '/management/re-agendamiento'},
    { name: 'Cancelación de citas', href: '/management/cancelacion'},
    { name: 'Autorización de órdenes', href: '/management/autorizaciones'},
    { name: 'Gestionar pacientes', href: '/management/gestionar-pacientes'},
    { name: 'Registrar pacientes', href: '/management/registrar-pacientes'},
    { name: 'Consultar información', href: '/management/consultar-pacientes'},
]
export const medicNavigation = [
    { name: 'Agenda', href: '/medico/agenda' },
    { name: 'Ver historiales clínicos', href: '/medico/historiales_clinicos' },
    { name: 'Información de Pacientes', href: '/medico/pacientes' }
]
export const adminNavigation = [
    { name: 'Cargar Usuarios Nuevos', href: '/management/load_users' },
    { name: 'Horario Medico', href: '/management/manage_medic' }
]