module.exports = autoCatch = (callback) => {
  return async (req, res, next) => {
    try {
      await callback(req, res, next)
    } catch (error) {
      res.status(res.statusCode || 500).send(error.message)
    }
  }
}

// https://www.youtube.com/watch?v=TbBdEZk64do


// function autoCatch(handler) {
//   return async (req, res, next) => {
//     try {
//       await handler(req, res, next);
//     } catch (error) {
//
//       console.error(error);
//       next(error);
//     }
//   };
// }

// module.exports = autoCatch;


//different
// function autoCatch(handlers) {
//   return function(req, res, next) {
//     const handler = handlers[req.method + ' ' + req.path];
//     if (!handler) return next();
//
//     Promise.resolve(handler(req, res, next))
//       .catch(next);
//   };
// }

// module.exports = function autoCatch(handlers) {
//   return (req, res, next) => {
//     const handler = handlers[req.method + ' ' + req.path];
//     if (!handler) return next();
//
//     Promise.resolve(handler(req, res, next))
//       .catch((error) => {
//         if (error.status) {
//           res.status(error.status).json({ error: error.message });
//         } else {
//           next(error);
//         }
//       });
//   };
// };

// function autoCatch(handler) {
//   return async (req, res, next) => {
//     try {
//       await handler(req, res, next);
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   };
// }
//

// module.exports = function autoCatch(handlers) {
//   return function (req, res, next) {
//     const handlerIndex = handlers.findIndex((handler) => {
//       return (
//         handler.method === req.method &&
//         handler.path === req.path
//       );
//     });
//
//     if (handlerIndex === -1) return next();
//
//     const handler = handlers[handlerIndex];
//     Promise.resolve(handler(req, res, next))
//       .catch((error) => {
//         if (error.status) {
//           res.status(error.status).json({ error: error.message });
//         } else {
//           next(error);
//         }
//       });
//   };
// };