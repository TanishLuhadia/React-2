This example showcases how to use class components and pass data to child components:

1. JavaScript Class (`Student`):
   - Defines a class to manage student data with properties (`id`, `name`, `company`, `salary`) and getter methods.

2. Functional Component (`AppExample2`):
   - Data Initialization:
     - Creates an array of `Student` instances and passes this data to the `PlacementList` component as props.
   - Rendering:
     - Displays a heading and the `PlacementList` component.

3. Class Component (`PlacementList`):
   - State Management:
     - Initializes state with students and placement year received via props.
   - Rendering:
     - Maps over the students array to display their details in a list format.

This example demonstrates how to manage and display data using class components and functional components in React.
