# react-native-modal-action
Modal with some options to actions for ReactNative on iOS and Android.

## Examples

![React Native Modal Action](https://image.ibb.co/gqxZj6/react_native_modal_action.png)

## Setup

```bash
npm install --save react-native-modal-action
yarn add react-native-modal-action
```

## Usage

```javascript
import {ModalAction, ActionItem} from 'react-native-modal-action';
...
<ModalAction
    visible={this.state.modalAction}
    onPressOutside={() => this.setState({modalAction:false})}
>           
    <ActionItem
        iconName={'pencil-square-o'}
        color={'#6C7A89'}
        callback={() => this._doSomethingOnAction('key')}
        title={'Edit'}
        description={'Edit your post'}
        visibleAction={true}
    />
    <ActionItem
        iconName={'ban'}
        color={'#6C7A89'}
        callback={() => this._doSomethingOnAction('key')}
        title={'Report'}
        description={'Report this post'}
        visibleAction={true}
    />
    <ActionItem
        iconName={'bookmark-o'}
        color={'#6C7A89'}
        callback={() => this._doSomethingOnAction('key')}
        title={'Save Item'}
        description={'Save to see later.'}
        visibleAction={true}
    />
    <ActionItem
        iconName={'frown-o'}
        color={'#6C7A89'}
        title={'Unfollow'}
        callback={() => this._doSomethingOnAction('key')}
        description={'Unfollow Diego'}
        visibleAction={true}
    />
    
    <ActionItem
        iconName={'trash-o'}
        color={'#F03434'}
        textColor={'#F03434'}
        title={'Delete'}
        description={'Delete your post'}
        callback={() => this._doSomethingOnAction('key')}
        visibleAction={true}
    />
</ModalAction>
...
```
