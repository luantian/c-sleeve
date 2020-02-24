import {Paging} from "../utils/Paging";

class SpuPaging {
    static getLatestPaging() {
        return new Paging({
            url: `spu/latest`
        }, 5)
    }


    /**
     *     1. 一条数据没有 空
     *     2. 最后一页，还有没有更多的数据
     *     3. 累加 100 1-20, 21-40 ... setData 重新渲染完整的数据
     *     4. 非分页数据: a. 正在加载 b.空
     *     5. 分页数据: a. 正在加载 b.加载完成 c.没有更多数据
     *     6. 上滑页面触底加载，避免用户重复发送请求 ( 数据锁 )
     *     7. 按钮 button 防抖 截流 ( 禁用，倒计时，模态，loading )
     *     8. 控制 start count 的控制
     */

}

export { SpuPaging }

