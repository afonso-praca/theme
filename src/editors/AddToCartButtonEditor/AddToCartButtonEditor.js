import React from 'react';
import './AddToCartButtonEditor.less';
import '../../components/AddToCartButton/AddToCartButton.less';
import colr from 'colr';
import ColorPicker from 'react-color/lib/components/sketched/Sketch';

class AddToCartButtonEditor extends React.Component {
  constructor(props) {
    super(props);

    let settings = this.props.settings;
    let color = settings ? settings.get('color') : '#75CCB1';
    let boxShadowColor = settings ? settings.get('boxShadowColor') : colr.fromHex(color).darken(8).toHex();

    this.state = {
      label: settings ? settings.get('label') : 'Adicionar ao carrinho',
      color: color,
      boxShadowColor: boxShadowColor
    };
  }

  changeValue = (ev) => {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  }

  handleColorChange = (color) => {
    let colorHex = color.hex;
    let boxShadowColorHex = colr.fromHex(colorHex).darken(8).toHex();
    this.setState({
      color: colorHex,
      boxShadowColor: boxShadowColorHex
    });
  }

  handleSave = () => {
    this.props.saveSettings(this.state);
  }

  render() {
    let ActionBar = this.props.actionBar;

    return (
      <div className="AddToCartButtonEditor">
        <div className="AddToCartButtonEditor__wrapper">
          <button
            className="AddToCartButton"
            style={{
              backgroundColor: this.state.color,
              boxShadow: `2px 2px 0px 0px ${this.state.boxShadowColor}`
            }}
          >
            <div className="AddToCartButton__inner">
              <a href="#">{ this.state.label }</a>
            </div>
          </button>
          <form className="AddToCartButtonEditor__form">
            <div className="AddToCartButtonEditor__form-wrapper">
              <div>
                <label htmlFor="label">Texto</label>
                <input
                  id="label"
                  className="form-control"
                  type="text"
                  name="label"
                  value={this.state.label}
                  onChange={this.changeValue.bind(this)}
                  placeholder="Adicionar ao carrinho"
                />
              </div>
              <div>
                <label htmlFor="label">Cor</label>
                <div className="row">
                  <div className="AddToCartButtonEditor__color-picker col-xs-12">
                    <ColorPicker
                      color={this.state.color}
                      onChange={this.handleColorChange.bind(this)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>

        <ActionBar
          id={this.props.componentProps.id}
          title={this.props.title}
          onSave={this.handleSave.bind(this)}
        />
      </div>
    );
  }
}

export default AddToCartButtonEditor;
