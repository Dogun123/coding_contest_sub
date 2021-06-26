module.exports = function(app)
{
    app.get('/',function(req,res){
        res.render('cover.html')
    });
    app.get('/home',function(req,res){
        res.render('home.html');
    });
    app.get('/activity',function(req,res){
        res.render('activity.html');
    });
}