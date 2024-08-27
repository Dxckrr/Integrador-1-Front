/**
 * Object that contains the routes on the navBar on the user page
 */
import EVALUACIONES_Y_DIAGNOSTICOS from '../../assets/svg/icons/services/IconEvaluacionesYDiagnosticos.svg';
import TRATAMIENTOS_Y_REHABILITACION from '../../assets/svg/icons/services/IconTratamientosYRehabilitacion.svg';
import SERVICIOS_QUIROPRACTICOS from '../../assets/svg/icons/services/IconServiciosQuiropractios.svg';
import ORTOPEDIA from '../../assets/svg/icons/services/IconOrtopedia.svg';
import TRATAMIENTOS_QUIRURGICOS from '../../assets/svg/icons/services/IconTratamientosQuirurgicos.svg';

export const services = [
    {
        title: 'Evaluaciones y Diagnósticos',
        imgRelated: EVALUACIONES_Y_DIAGNOSTICOS,
        id: 1,
    },
    {
        title: 'Tratamientos de rehabilitación',
        imgRelated: TRATAMIENTOS_Y_REHABILITACION,
        id: 2,
    },
    {
        title: 'Servicios quiroprácticos',
        imgRelated: SERVICIOS_QUIROPRACTICOS,
        id: 3,
    },
    {
        title: 'Ortopedia',
        imgRelated: ORTOPEDIA,
        id: 4,
    }, {
        title: 'Tratamientos quirúrgicos',
        imgRelated: TRATAMIENTOS_QUIRURGICOS,
        id: 5,
    }
]