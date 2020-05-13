
const initialData = {

  tasks: {
    'task-1': {id:'task-1', title:'task 1', color: '#1973BA'},
    'task-2': {id:'task-2', title:'task 2', color: 'green'},
    'task-3': {id:'task-3', title:'task 3', color: 'blue'},
  },
  rows: {
    'row-1': { id:'row-1', taskIds: ['task-1','task-2']},
    'row-2': { id:'row-2', taskIds: [] },
    'row-3': { id:'row-3', taskIds: ['task-3'] },
    'row-4': { id:'row-4', taskIds: [] }
  },
  lanes: {
    'lane-1': {
      id:'lane-1', 
      title: 'Lane 1', 
      color: '#EF6031',
      rowIds: ['row-1','row-2'],
    },
    'lane-2': {
      id: 'lane-2',
      title: 'Lane 2',
      color: 'purple',
      rowIds:['row-3']
    }
  },
  
  orderedLanes: ['lane-1','lane-2'],

}

export default initialData;