import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PokemonList from './PokemonList';
import * as actions from '../../actions';

const mapStateToProps = ({ currentPokemonList }) => ({ currentPokemonList }); 

const mapDispatchToProps = (dispatch) => (bindActionCreators(actions, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);