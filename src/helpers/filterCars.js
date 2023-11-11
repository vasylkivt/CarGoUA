export const filterCars = (cars, filters) => {
  const filteredCarList = cars.filter(({ make, rentalPrice /* mileage */ }) => {
    return (
      make === filters.brand &&
      (filters.price === 0 ||
        parseFloat(rentalPrice.replace('$', '')) < filters.price)
    );
  });
  return filteredCarList;
};
