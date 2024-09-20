import { DocumentMagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { ChartBarIcon } from '@heroicons/react/24/solid';
import { UserPlusIcon } from '@heroicons/react/24/solid';
import { PencilSquareIcon } from '@heroicons/react/24/solid';
import { CurrencyDollarIcon } from '@heroicons/react/24/solid';

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
interface AdminNavigationItem {
    name: string;
    href: string;
    svg: React.ElementType;
    subRef?: { name: string; href: string }[];
}
export const adminNavigation = [
    { name: 'Registrar usuarios', href: '', id: 'registrar', svg: {UserPlusIcon}, 
        subRef: [
        { name: 'Pacientes', href: '/admin/registrar-paciente'},
        { name: 'Operadores', href: '/admin/registrar-operador'},
        { name: 'Medicos', href: '/admin/registrar-medicos'},
        ]
    },
    { name: 'Modificar usuarios', href: '', id: 'modificar', svg: {PencilSquareIcon},
        subRef: [
            { name: 'Pacientes', href: '/admin/modificar-paciente'},
            { name: 'Operadores', href: '/admin/modificar-operador'},
            { name: 'Medicos', href: '/admin/modificar-medicos'},
            ]
    },
    { name: 'Consultar información', href: '', id: 'consultar', svg: {DocumentMagnifyingGlassIcon},
        subRef: [
            { name: 'Pacientes', href: '/admin/consultar-paciente'},
            { name: 'Operadores', href: '/admin/consultar-operador'},
            { name: 'Medicos', href: '/admin/consultar-medicos'},
            ]
    },
    { name: 'Finanzas', href: '/admin/finanzas', id: 'finanzas', svg: {CurrencyDollarIcon}},
    { name: 'Encuesta de satisfacción', href: '/admin/encuesta-satisfaccion', id: 'encuesta', svg: {ChartBarIcon}
    },
    { name: 'Estadísticas', href: '/admin/estadisticas', id: 'estadisticas', svg: {DocumentMagnifyingGlassIcon}}
]