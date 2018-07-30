import React, {Component} from 'react';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import {Link} from 'react-router-dom'
import Card from '@material-ui/core/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Redirect } from 'react-router-dom';




const SortableItem = SortableElement(({value}) => <li className="sortableItem">{value}</li>);

const SortableList = SortableContainer(({items}) => {
  return (
    <ul>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value}/>
      ))}
    </ul>
  );
});

class Survey2 extends Component {
  state = {
    items: ['Average Temperature', 'Snowfall', 'Rainfall'],
    done: 0,
  };
  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex),
    });
  };

  saveData ()
  {
    let o_at = 0;
    let o_rain = 0;
    let o_snow = 0;

    if (this.state.items[0] === "Average Temperature")
    {
        o_at = 1;
    }

    else if (this.state.items[0] === "Snowfall")
    {
        o_snow = 1;
    }

    else if (this.state.items[0] === "Rainfall")
    {
        o_rain = 1;
    }

    if (this.state.items[1] === "Average Temperature")
    {
        o_at = 2;
    }

    else if (this.state.items[1] === "Snowfall")
    {
        o_snow = 2;
    }

    else if (this.state.items[1] === "Rainfall")
    {
        o_rain = 2;
    }

    if (this.state.items[2] === "Average Temperature")
    {
        o_at = 3;
    }

    else if (this.state.items[2] === "Snowfall")
    {
        o_snow = 3;
    }

    else if (this.state.items[2] === "Rainfall")
    {
        o_rain = 3;
    }

    console.log("temp = "+ o_at +"snow = " + o_snow + "rain = " + o_rain );

    let reqBody =
    {
      o_at: o_at,
      o_snow: o_snow,
      o_rain: o_rain
    }

      fetch("/api/storeUserDataSurvey2", {
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
          this.setState({done: 1});
        })

  }

  render() {
    if (this.state.done === 1)
    {
      return <Redirect to='./survey3' />
    }

    return (

      <div>
      <div className="CardHeader">
        <p>Survey Questions: 2 / 4</p>
        <Link to="/HomePage"><FontAwesomeIcon icon={faTimes} /></Link>
      </div>

      <Card className="surveyDiv survey2 sortable">
            <p>Drag these itens, placing the topic with more relevance on the top of the list. Remember the answers you gave in the previous part of the survey.</p>

            <br/>

            <SortableList items={this.state.items} onSortEnd={this.onSortEnd} />

            <div className="surveyNav">
              <button className='btn' onClick={this.saveData.bind(this)} >
                  Save
                </button>

            </div>

      </Card>
    </div>
    );
  }
}

export default Survey2;
