import React from 'react'

export const Question = () => {
    return (
        <div className="container mt-5">
            <div className='text-center'>   
                <h2>To get started!</h2>
                <p> Tell us a little bit about yourself</p>
            </div>
            <form className='form-con'>
                <div className="mb-3">
                    <label htmlFor="userName" className="form-label">User Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="userName"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Age Group</label>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="options"
                            id="under18"
                            value="under18"
                            required
                        />
                        <label className="form-check-label" htmlFor="under18">
                            Under 18
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="options"
                            id="18to25"
                            value="18to25"
                            required
                        />
                        <label className="form-check-label" htmlFor="18to25">
                            18-25
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="options"
                            id="option3"
                            value="option3"
                            required
                        />
                        <label className="form-check-label" htmlFor="option3">
                            Option 3
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="options"
                            id="option4"
                            value="option4"
                            required
                        />
                        <label className="form-check-label" htmlFor="option4">
                            Option 4
                        </label>
                    </div>
                </div>
                {/* GENDER */}
                <div className="mb-3">
                    <label className="form-label">Gender</label>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="options"
                            id="under18"
                            value="under18"
                            required
                        />
                        <label className="form-check-label" htmlFor="under18">
                            Under 18
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="options"
                            id="18to25"
                            value="18to25"
                            required
                        />
                        <label className="form-check-label" htmlFor="18to25">
                            18-25
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="options"
                            id="option3"
                            value="option3"
                            required
                        />
                        <label className="form-check-label" htmlFor="option3">
                            Option 3
                        </label>
                    </div>

                </div>
                {/* q1 */}
                <div className="mb-3">
                    <label className="form-label"> Out of the following, what are some of the problems you currently struggle with or struggled with at some point in your life (choose all that apply)</label>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="options"
                            id="under18"
                            value="under18"
                            required
                        />
                        <label className="form-check-label" htmlFor="under18">
                            Under 18
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="options"
                            id="under18"
                            value="under18"
                            required
                        />
                        <label className="form-check-label" htmlFor="under18">
                            Under 18
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="options"
                            id="under18"
                            value="under18"
                            required
                        />
                        <label className="form-check-label" htmlFor="under18">
                            Under 18
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="options"
                            id="18to25"
                            value="18to25"
                            required
                        />
                        <label className="form-check-label" htmlFor="18to25">
                            18-25
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="options"
                            id="option3"
                            value="option3"
                            required
                        />
                        <label className="form-check-label" htmlFor="option3">
                            Option 3
                        </label>
                    </div>

                </div>
                <button type="submit" className="hero-btn">Submit</button>
            </form>
        </div>

    )
}
