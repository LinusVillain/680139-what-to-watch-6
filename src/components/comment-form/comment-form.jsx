import React, {useState} from 'react';

const RatingAndCommentForm = () => {
  const [userForm, setUserForm] = useState({
    value: ``,
    rating: ``
  });

  const STARS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleRadioChange = (evt) => {
    setUserForm({...userForm, rating: evt.target.value});
    // console.log(userForm);
  };

  const handleFieldChange = (evt) => {
    setUserForm({...userForm, value: evt.target.value});
    // console.log(userForm);
  };

  return (
    <div className="add-review">

      <form action="#" className="add-review__htmlForm">
        <div className="rating">
          <div className="rating__stars">

            {STARS.map((star, i) => {
              return (
                <React.Fragment key={`${i}-star`}>
                  <input onChange={handleRadioChange} className="rating__input" id={`star-${i}`} type="radio" name="rating" value={star} />
                  <label className="rating__label" htmlFor={`star-${i}`}>Rating {i}</label>
                </React.Fragment>
              );
            })}

          </div>
        </div>

        <div className="add-review__text">
          <textarea value={userForm.value} onChange={handleFieldChange} className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"></textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>

        </div>
      </form>
    </div>
  );
};

export default RatingAndCommentForm;
