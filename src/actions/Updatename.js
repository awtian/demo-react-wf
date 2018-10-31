export default function (namabaru) {

  return {
    type: 'UPDATENAME',
    payload: namabaru,
    updatedAt: new Date().toISOString()
  }
}