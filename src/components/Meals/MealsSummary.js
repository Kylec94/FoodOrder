import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, One Chugga Chugga At A Time</h2>
      <p>
        Choose from our broad selection of available meals and enjoy a lunch or
        dinner on our historic train and route.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time by
        our experienced chefs!
      </p>
    </section>
  );
};

export default MealsSummary;
