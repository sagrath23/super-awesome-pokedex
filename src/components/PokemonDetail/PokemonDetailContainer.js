import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PokemonDetail from './PokemonDetail';
import * as actions from '../../actions';


const mapStateToProps = ({ detailedPokemon }) => ({ detailedPokemon });

const mapDispatchToProps = (dispatch) => (bindActionCreators(actions, dispatch));

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PokemonDetail));
