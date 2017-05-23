import groupSaga from './groupSagas'
import userSaga from './usersSagas'
import subjectsSaga from './subjectsSagas'

export default function* rootSaga() {
  yield [
    groupSaga,
    userSaga,
    subjectsSaga
  ]
}
