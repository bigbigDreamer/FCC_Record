// 获取路由表

const routes = [
    {
        path: '/',
        content: 'hello',
        children: [
            {
                path: 'home',
                content: 'world'
            },
            {
                path: 'other',
                content: 'nihao',
                children: [
                    {
                        path: 'Jjj',
                        content: '急急急'
                    }
                ]
            }
        ]
    },
    {
        path: '/other',
        content: 'other'
    }
];

/**
 * @time  2019/10/8 20:04
 * @author  Eric Wang <vuejs@vip.qq.com>
 * @desc
 * // 输入

 // 输出
 *   [
 { path: '/', content: 'hello'},
 { path: '/home', content: ['hello','world']},
 { path: '/other', content: ['hello','nihao']},
 { path: '/other/Jjj', content: ['hello','nihao','急急急']},
 { path: '/other', content: 'other' }
 ]
 */

// 过滤路由
function filterData(routes, newArr = []) {
    routes.map(item => {
        newArr.push({
            path: item.path,
            content: item.content
        });
        if (item.children) {
            // filterData(item.children, newArr);
            item.children.map(item1 => {
                newArr.push({
                    path: `${item.path}${item1.path}`,
                    content: [item.content, item1.content]
                });
                if (item1.children) {
                    item.children.map(item2 => {
                        newArr.push({
                            path: `${item.path}${item1.path}/${item2.path}`,
                            content: [item.content, item1.content, item2.content]
                        });
                    })
                }
            });
        }
    });

    return newArr;
}

console.log(filterData(routes));