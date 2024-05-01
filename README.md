## REDUX KULLANIMI

### Adım 1: Reducer Dosyası Oluşturma

İlk olarak, reducer dosyası oluşturun ve başlangıç durumunu tanımlayın.

```jsx
const initialState = {
  count: 0
};

const counterReducer = (state = initialState, action) => {
  // Durum güncelleme işlemleri
};

export default counterReducer;
```

### Adım 2: Store Oluşturma

```jsx
import { createStore } from 'redux';
import counterReducer from './counterReducer';

const store = createStore(counterReducer);

export default store;

```

### Adım 3: Store'u Uygulamaya Bağlama

Redux store'unu uygulamaya bağlamak için Provider bileşenini kullanın.

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

### Adım 4: Action'lar Oluşturma

```jsx
export const azaltma = () => {
  return {
    type: 'AZALT'
  };
};

// Diğer action'lar

```

### Adım 5: Component Bağlama

Redux store'dan durumu almak ve action'ları tetiklemek için useSelector ve useDispatch hook'larını kullanın.

```jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './actions';

const Counter = () => {
  // State ve dispatch tanımlamaları
};


```



