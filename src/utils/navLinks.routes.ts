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
    { name: 'Confirmación de cita', href: '/management/confirm' },
    { name: 'Cancelación', href: '/management/cancel' },
    { name: 'Agendar Citas', href: '/management/schedule' },
    { name: 'Reasignación de citas', href: '/management/reschedule' },
    { name: 'Agregar Usuario', href: '/management/addUser' },
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