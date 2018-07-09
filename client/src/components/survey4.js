import React, {Component} from 'react';
import {render} from 'react-dom';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';

const SortableItem = SortableElement(({value}) => <li>{value}</li>);

const SortableList = SortableContainer(({items}) => {
  return (
    <ul>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </ul>
  );
});

class Survey4 extends Component {
  state = {
    items: ['Weather', 'Tuition Fees', 'Cost of Living', 'Institution Rank', 'Employment'],
  };
  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex),
    });
  };

  saveData ()
  {
    let o_w = 0;
    let o_tui = 0;
    let o_col = 0;
    let o_rank = 0;
    let o_emp = 0;

    if (this.state.items[0] === "Weather")
    {
        o_w = 5;
    }

    else if (this.state.items[0] === "Tuition Fees")
    {
        o_tui = 5;
    }

    else if (this.state.items[0] === "Cost of Living")
    {
        o_col = 5;
    }

    else if (this.state.items[0] === "Institution Rank")
    {
        o_rank = 5;
    }

    else if (this.state.items[0] === "Employment")
    {
        o_emp = 5;
    }

    if (this.state.items[1] === "Weather")
    {
        o_w = 4;
    }

    else if (this.state.items[1] === "Tuition Fees")
    {
        o_tui = 4;
    }

    else if (this.state.items[1] === "Cost of Living")
    {
        o_col = 4;
    }

    else if (this.state.items[1] === "Institution Rank")
    {
        o_rank = 4;
    }

    else if (this.state.items[1] === "Employment")
    {
        o_emp = 4;
    }

    if (this.state.items[2] === "Weather")
    {
        o_w = 3;
    }

    else if (this.state.items[2] === "Tuition Fees")
    {
        o_tui = 3;
    }

    else if (this.state.items[2] === "Cost of Living")
    {
        o_col = 3;
    }

    else if (this.state.items[2] === "Institution Rank")
    {
        o_rank = 3;
    }

    else if (this.state.items[2] === "Employment")
    {
        o_emp = 3;
    }

    if (this.state.items[3] === "Weather")
    {
        o_w = 2;
    }

    else if (this.state.items[3] === "Tuition Fees")
    {
        o_tui = 2;
    }

    else if (this.state.items[3] === "Cost of Living")
    {
        o_col = 2;
    }

    else if (this.state.items[3] === "Institution Rank")
    {
        o_rank = 2;
    }

    else if (this.state.items[3] === "Employment")
    {
        o_emp = 2;
    }

    if (this.state.items[4] === "Weather")
    {
        o_w = 1;
    }

    else if (this.state.items[4] === "Tuition Fees")
    {
        o_tui = 1;
    }

    else if (this.state.items[4] === "Cost of Living")
    {
        o_col = 1;
    }

    else if (this.state.items[4] === "Institution Rank")
    {
        o_rank = 1;
    }

    else if (this.state.items[4] === "Employment")
    {
        o_emp = 1;
    }



    let reqBody =
    {
      o_w: o_w,
      o_tui: o_tui,
      o_col: o_col,
      o_rank: o_rank,
      o_emp: o_emp
    }

      fetch("/api/storeUserDataSurvey4", {
        method: "POST",
        body: JSON.stringify(reqBody),
        headers: {
                  "Content-Type": "application/json"
              }
      }).then((res) => {
          if (res.ok){
            return res.json();
          } else {
            throw new Error ('Something went wrong with your fetch');
          }
        }).then((json) => {
          console.log(json);
        })

  }

  render() {
    return (
      <div>
      <SortableList items={this.state.items} onSortEnd={this.onSortEnd} />
      <p>{this.state.items[0]}</p>
        <button onClick={this.saveData.bind(this)} >
            Save Responses
          </button>
      </div>
    );
  }
}

export default Survey4;
