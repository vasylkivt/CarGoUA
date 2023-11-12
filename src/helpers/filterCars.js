export const filterCars = (cars, { brand, price, mileageFrom, mileageTo }) => {
  const from = Number(mileageFrom);
  const to = Number(mileageTo);
  const filteredCarList = cars.filter(({ make, rentalPrice, mileage }) => {
    return (
      (brand === '' || make === brand) &&
      (price === 0 || parseFloat(rentalPrice.replace('$', '')) < price) &&
      (from === 0 || from < mileage) &&
      (to === 0 || to > mileage)
    );
  });
  return filteredCarList;
};
