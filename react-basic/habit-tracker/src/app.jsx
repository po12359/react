import "./app.css";
import Habits from "./components/habits";
import Nav from "./components/nav.jsx";
import { Component } from "react";
import Input from "./components/input";
class App extends Component {
  state = {
    habits: [],
  };
  handleIncrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;

    this.setState({ habits });
  };
  handleDecrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count;

    this.setState({ habits });
  };
  handleDelete = (habit) => {
    const habits = this.state.habits.filter((state) => state.id !== habit.id);

    this.setState({ habits });
  };
  handleReset = () => {
    //   const habits = this.state.habits.filter((state) => (state.length = 0)); 배열 초기화
    const habits = this.state.habits.map((habit) => {
      return { ...habit, count: 0 };
    });
    this.setState({ habits });
  };
  handleAdd = (name) => {
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
    this.setState({ habits });
  };
  render() {
    return (
      <>
        <Nav
          totalCount={this.state.habits.filter((item) => item.count > 0).length}
        />
        <div className="habits">
          <Input onAdd={this.handleAdd} />
        </div>
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement} // (e)=> this.handleIncrement(e) : 똑같은 arg는 생략 가능하다.
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onReset={this.handleReset}
        ></Habits>
      </>
    );
  }
}

export default App;
