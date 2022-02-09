import { render, screen,fireEvent } from '@testing-library/react';
import TodoList from './TodoList';



it('renders without crashing', () => {
  render(<TodoList />);
});

it("matches snapshot", function() {
    const { asFragment } = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
});


it("adds new todo",()=>{
    const {debug,queryByText,getByLabelText}=render(<TodoList/>);

    const btn=queryByText("Submit")
    let TodoInput=getByLabelText('Todo')
    

    
    expect(queryByText('❌')).not.toBeInTheDocument()


    fireEvent.change(TodoInput,{target:{value:'clean your room'}})
    fireEvent.click(btn)

    let deleteMe=queryByText('❌')

    expect(queryByText('❌')).toBeInTheDocument()

    console.log(deleteMe.closest('span'))
    expect(deleteMe.previousSibling.previousSibling).toHaveStyle(`
    text-decoration: None;
  `);

    fireEvent.click(deleteMe)
})

it("strikethroughs todo when it is clicked on",()=>{
    const {debug,queryByText,getByLabelText}=render(<TodoList/>);

    const btn=queryByText("Submit")
    let TodoInput=getByLabelText('Todo')
    

    fireEvent.change(TodoInput,{target:{value:'clean your room'}})
    fireEvent.click(btn)

    let deleteMe=queryByText('❌')

    expect(queryByText('❌')).toBeInTheDocument()

    expect(deleteMe.previousSibling.previousSibling).toHaveStyle(`
    text-decoration: None;
  `);

    let task=queryByText('clean your room')

    fireEvent.click(task)
    expect(task).toHaveStyle(`
    text-decoration: line-through;
    `);
    fireEvent.click(deleteMe)
})

it("deletes todo when the delete button is clicked on",()=>{
    const {debug,queryByText,getByLabelText}=render(<TodoList/>);

    const btn=queryByText("Submit")
    let TodoInput=getByLabelText('Todo')
    

    fireEvent.change(TodoInput,{target:{value:'clean your room'}})
    fireEvent.click(btn)
    let task=queryByText('clean your room')
    let deleteMe=queryByText('❌')

    expect(queryByText('❌')).toBeInTheDocument()

    fireEvent.click(deleteMe)
    expect(deleteMe).not.toBeInTheDocument()
    expect(task).not.toBeInTheDocument()
    
})