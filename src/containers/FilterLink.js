// @flow
import { connect } from 'react-redux';
import TodoAction from '../components/TodoAction'

const getActiveFilter = (stateFilter, propsFilter) => stateFilter === propsFilter

const mapStateToProps = (state, ownProps) => ({
    active: getActiveFilter(state.visibility, ownProps.value)
})

const setVisibilityFilter = (dispatch, filter) => {
    dispatch({type: "SET_VISIBILITY_FILTER", filter})
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    setVisibilityFilter: () => setVisibilityFilter(dispatch, ownProps.value) 
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoAction)