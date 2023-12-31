//TODO: Add proper error handling and 2 version without
//Page 43-45


function mapAsync (arr, fn, onFinish){
  let prevError
  let nRemaining = arr.length
  const results = []

  arr.forEach(function (item, i) {
    fn(item, function (err, data) {
      if (prevError) return

      if (err) {
        prevError = err
        return onFinish(err)
      }
      results[i] = data

      nRemaining--
      if (!nRemaining) onFinish(null, results)
    })
  })
}