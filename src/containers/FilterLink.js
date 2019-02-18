// @flow
import { connect } from 'react-redux';
import TodoAction from '../components/TodoAction'
import {setVisibilityFilter} from '../actions'

const getActiveFilter = (stateFilter, propsFilter) => stateFilter === propsFilter

const mapStateToProps = (state, ownProps) => ({
    active: getActiveFilter(state.visibility, ownProps.value)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    setVisibilityFilter: () => dispatch(setVisibilityFilter(ownProps.value))

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoAction)