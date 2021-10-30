const { that, _, connect } = require('../../imports')
const { ListenerSuperclass } = require('../../superclass')

class CutsceneListener extends ListenerSuperclass {
  constructor (props) { super(props, 'cutsceneLis') }

  onEvent () {
    if (!this.props.cutscene_id) { return false }
    console.debug('ici', this.props.cutscene_id)

    const cutscene_id = this.props.cutscene_id
    if (!that.cutscenes[cutscene_id]) { return false }

    that.cutscene = new that.cutscenes[cutscene_id]()
  }
}

const CutsceneListenerConnected = connect(state => ({
  cutscene_id: state.ressources.cutscene.cutscene_id,

}), null)(CutsceneListener)

module.exports = CutsceneListenerConnected