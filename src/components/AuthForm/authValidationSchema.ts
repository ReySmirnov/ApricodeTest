import * as yup from 'yup'

export const authValidationSchema = yup.object().shape({
    login: yup.string().required('введите логин'),
    password: yup.string().required('введите пароль')
})