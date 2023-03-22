import router from "./prepend";

import crawler from "./crawler/index";
import api from "./api/index";

router.use("/api", api);
router.use("/crawler", crawler);

export default router;
