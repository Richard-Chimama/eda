interface Props{
    date_of_birth: string | number | Date
}
/**
 * This function calculate the age of a person
 * @param date_of_birth is the date of the birth
 * @returns the age of of the person
 */

const CalculateAge=(date_of_birth:Props)=>{
  const date = new Date(Date.now());
  const currentYear = date.getFullYear()
  const DoB = new Date(date_of_birth).getFullYear()
  const age = currentYear - DoB

  return age

}

export default CalculateAge