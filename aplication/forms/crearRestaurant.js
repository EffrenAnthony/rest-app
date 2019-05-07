import t from 'tcomb-form-native';
import sliderTemplate from './components/slide'

export const Restaurant = t.struct({
    nombre: t.String,
    direccion: t.String,
    descripcion: t.String,
    capacidad: t.Number,
});

export const options = {
    fields:{
        nombre:{
            label:'Nombre (*)',
            placeholder: 'Ejm: Cevicheria el pollo dorado'
        },
        direccion:{
            label:'Direccion (*)',
            placeholder: 'Ejm: Av. Luna Pizarro'
        },
        capacidad:{
            label:'Capacidad',
            help:'Capacidad en Personas',
            config:{
                step:1,
                min:1,
                max:200
            },
            template:sliderTemplate
        },
        descripcion:{
            label:'Descripción (*)',
            placeholder: 'Ejm: Pescados y pollos',
            multiline: true
        },
    }
}