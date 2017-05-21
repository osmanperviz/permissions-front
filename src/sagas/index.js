import groupSaga from './groupSagas'

export default function* rootSaga() {
  yield [
    groupSaga
  ]
}
