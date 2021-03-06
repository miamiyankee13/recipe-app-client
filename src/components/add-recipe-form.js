import React from 'react';
import { connect } from 'react-redux';
import { createRecipe } from '../actions/recipes';
import MealOptions from './meal-options';
import TypeOptions from './type-options';
import './styles/add-recipe-form.css';

export class AddRecipeForm extends React.Component {
    state = {
        nameVal: '',
        ingredientsVal: '',
        instructionsVal: '',
        sidesVal: '',
        mealVal: '',
        typeVal: ''
    };

    //track name value
    handleNameChange = event => {
        this.setState({
            nameVal: event.target.value
        });
    }

    //track ingredients value
    handleIngredientsChange = event => {
        this.setState({
            ingredientsVal: event.target.value
        });
    }

    //track instructions value
    handleInstructionsChange = event => {
        this.setState({
            instructionsVal: event.target.value
        });
    }

    //track sides value
    handleSidesChange = event => {
        this.setState({
            sidesVal: event.target.value
        });
    }

    //track meal value
    handleMealChange = event => {
        this.setState({
            mealVal: event.target.value
        });
    }

    //track type value
    handleTypeChange = event => {
        this.setState({
            typeVal: event.target.value
        });
    }

    //dispatch create recipe async action & scroll to top of window
    handleSubmit = event => {
        event.preventDefault();
        const name = this.state.nameVal;
        const ingredients = this.state.ingredientsVal.split(",").map(item => item.trim());
        const instructions = this.state.instructionsVal.split(",").map(item => item.trim());
        const sides = this.state.sidesVal.split(",").map(item => item.trim());
        const meal = this.state.mealVal;
        const type = this.state.typeVal;
        this.props.dispatch(createRecipe(name, ingredients, instructions, sides, meal, type));
        window.scrollTo(0,0);
    }

    render() {
        return (
            <form className="add-recipe__form" onSubmit={this.handleSubmit}>
                <label htmlFor="add-recipe__name">name</label>
                <input 
                    type="text" 
                    id="add-recipe__name" 
                    name="add-recipe__name" 
                    value={this.state.nameVal} 
                    onChange={this.handleNameChange}
                    placeholder="name"
                    required
                />
                <label htmlFor="add-recipe__ingredients">ingredients</label>
                <input 
                    type="text" 
                    id="add-recipe__ingredients" 
                    name="add-recipe__ingredients" 
                    value={this.state.ingredientsVal} 
                    onChange={this.handleIngredientsChange}
                    placeholder="ingredient, ingredient"
                    required
                />
                <label htmlFor="add-recipe__instructions">instructions</label>
                <input 
                    type="text" 
                    id="add-recipe__instructions" 
                    name="add-recipe__instructions" 
                    value={this.state.instructionsVal} 
                    onChange={this.handleInstructionsChange}
                    placeholder="instruction, instruction"
                    required
                />
                <label htmlFor="add-recipe__sides">sides</label>
                <input 
                    type="text" 
                    id="add-recipe__sides" 
                    name="add-recipe__sides" 
                    value={this.state.sidesVal} 
                    onChange={this.handleSidesChange}
                    placeholder="side, side"
                    required
                />
                <label htmlFor="add-recipe__meal">meal</label>
                <select 
                    id="add-recipe__meal" 
                    name="add-recipe__meal" 
                    value={this.state.mealVal} 
                    onChange={this.handleMealChange}
                    required
                >
                    <option value=''>--Select Meal--</option>
                    <MealOptions />
                </select>
                <label htmlFor="add-recipe__type">type</label>
                <select 
                    id="add-recipe__type" 
                    name="add-recipe__type" 
                    value={this.state.typeVal} 
                    onChange={this.handleTypeChange}
                    required
                >
                    <option value=''>--Select Type--</option>
                    <TypeOptions />
                </select>
                <button type="submit">add recipe</button>
            </form>
        );
    }
}

export default connect()(AddRecipeForm);