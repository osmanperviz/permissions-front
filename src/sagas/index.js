import groupSaga from './groupSagas'
import userSaga from './usersSagas'

export default function* rootSaga() {
  yield [
    groupSaga,
    userSaga
  ]
}
