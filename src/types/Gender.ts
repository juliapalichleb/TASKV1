// @ts-ignore
enum Gender {
    Male = 'male',
    Female = 'female',
    Unisex = 'unisex',
}

 const GenderTypeDisplayNames: Record<Gender, string> = {
  [Gender.Male]: "Male",
  [Gender.Female]: "Female",
  [Gender.Unisex]: "Unisex",
};


export {Gender, GenderTypeDisplayNames}