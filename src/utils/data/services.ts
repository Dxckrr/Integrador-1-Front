/**
 * Object that contains the routes on the navBar on the user page
 */
import EVALUACIONES_Y_DIAGNOSTICOS from '../../assets/svg/icons/services/IconEvaluacionesYDiagnosticos.svg';
import TRATAMIENTOS_Y_REHABILITACION from '../../assets/svg/icons/services/IconTratamientosYRehabilitacion.svg';
import SERVICIOS_QUIROPRACTICOS from '../../assets/svg/icons/services/IconServiciosQuiropractios.svg';
import ORTOPEDIA from '../../assets/svg/icons/services/IconOrtopedia.svg';
import TRATAMIENTOS_QUIRURGICOS from '../../assets/svg/icons/services/IconTratamientosQuirurgicos.svg';

type Service = {
    title: string;
    imgRelated: string;
    description: string;
    id: number;
};
export const services: Service[] = [
    {
        title: 'Evaluaciones y Diagnósticos',
        imgRelated: EVALUACIONES_Y_DIAGNOSTICOS,
        description: 'Recupera tu movilidad y mejora tu bienestar con nuestros tratamientos personalizados.',
        id: 5,
    },
    {
        title: 'Tratamientos de rehabilitación',
        imgRelated: TRATAMIENTOS_Y_REHABILITACION,
        description: 'Recupera tu movilidad y mejora tu bienestar con nuestros tratamientos personalizados.',
        id: 6,
    },
    {
        title: 'Servicios quiroprácticos',
        imgRelated: SERVICIOS_QUIROPRACTICOS,
        description: 'Recupera tu movilidad y mejora tu bienestar con nuestros tratamientos personalizados.',
        id: 7,
    },
    {
        title: 'Ortopedia',
        imgRelated: ORTOPEDIA,
        description: 'Recupera tu movilidad y mejora tu bienestar con nuestros tratamientos personalizados.',
        id: 8,
    }, {
        title: 'Tratamientos quirúrgicos',
        imgRelated: TRATAMIENTOS_QUIRURGICOS,
        description: 'Recupera tu movilidad y mejora tu bienestar con nuestros tratamientos personalizados.',
        id: 9,
    },
    // {
    //     title: 'Emergencias',
    //     imgRelated: TRATAMIENTOS_QUIRURGICOS,
    //     description: 'Recupera tu movilidad y mejora tu bienestar con nuestros tratamientos personalizados.',
    //     id: 10,
    // }
]