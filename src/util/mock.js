//引入mockjs
const Mock = require('mockjs')

/*
    {
        statusCode: 200,
        message: 'ok',
        data: [
            {
                id: 1,
                name: '体育'
            },
            ...
        ]
    }
*/
Mock.mock(/\/V1\/category.*/, (req, res) => {
    return Mock.mock({
        'statusCode': 200,
        'message': 'ok',
        'data|5-10': [{
            'id|+1': 1,
            'name': '@CTITLE(2, 4)',
        }],
    })
})


/* 
    GET /v1/swaper/{categoryId}


    {
        statusCode: 200,
        message: 'ok',
        pageCount: 450,
        data: [
            {
                id: 1,
                title: 'xx',
                desc: 'xxx',
                thumb: 'http://....png'
            },
            ....
        ]
    }
*/
Mock.mock(/\/V1\/swaper.*/, (req, res) => {
    return Mock.mock({
        'statusCode': 200,
        'message': 'ok',
        'data|5-10': [{
            'id|+1': 1,
            'title': '@CTITLE(10, 20)',
            'desc': '@CTITLE(20, 50)',
            'thumb': "@IMAGE('360x180')",
        }],
    })
})


/*
    GET /v1/list/{categroyId}?page={page}&count={count}


    {
        statusCode: 200,
        message: 'ok',
        pageCount: 450,
        data: [
            {
                id: 1,
                title: 'xx',
                desc: 'xxx',
                thumb: 'http://....png'
            },
            ....
        ]
    }
*/

Mock.mock(/\/V1\/list.*/, (req, res) => {
    return Mock.mock({
        'statusCode': 200,
        'message': 'ok',
        'data|5-10': {
            'pageCount': 10,
            'list|0-10': [{
                'id|+1': 1,
                'title': '@CTITLE(10, 20)',
                'desc': '@CTITLE(20, 50)',
                'thumb': "@IMAGE('360x180')",
            }]
        },
    })
})


/*
    GET /v1/detail/{newsId}

    {
        statusCode: 200,
        message: 'ok',
        data: {
            id: 1,
            title: 'xx',
            desc: 'xxx',
            publishTime: 'xxxx-xx-xx',
            content: '3s2d1fs2df13sf',
            thumb: 'http://....png'
        }
    }
*/
Mock.mock(/\/V1\/detail.*/, (req, res) => {
    return Mock.mock({
        'statusCode': 200,
        'message': 'ok',
        'data': {
            'id|+1': 1,
            'title': '@CTITLE(10, 20)',
            'desc': '@CTITLE(20, 50)',
            'thumb': "@IMAGE('360x180')",
            'publishTime': "@DATE('yyyy-MM-dd')",
            'content': "@paragraph(1, 3)<img src='@IMAGE('360x180')'/>@paragraph(1, 3)"
        },
    })
})