export const filterCars = (cars, { brand, price, mileageFrom, mileageTo }) => {
  const filteredCarList = cars.filter(({ make, rentalPrice, mileage }) => {
    return (
      (brand === '' || make === brand) &&
      (price === 0 || parseFloat(rentalPrice.replace('$', '')) < price) &&
      (mileageFrom === 0 || mileageFrom < mileage) &&
      (mileageTo === 0 || mileageTo > mileage)
    );
  });
  return filteredCarList;
};
