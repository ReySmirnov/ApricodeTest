import * as yup from 'yup'

export const toDoValidationSchema = yup.object().shape({
    inputToDo: yup.string().trim().required('Заполните поле'),
})