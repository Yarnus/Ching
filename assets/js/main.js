function tagSuccess(data) {
    var $result = $('.tagcloud');
    $.each(data.tags, function (i, tag) {
        $result.append(
            '<a href="/tag/' + tag.slug + '">' + tag.name + '</a>\n'
        );
    });
}

function tagFail() {
    var $result = $('.tagcloud');
    $result.append('Nothing');
}

$(document).ready(function () {
    var tags_endpoint = ghost.url.api('tags', {
        limit: 'all', 
        include: 'count.posts', 
        order: 'count.posts DESC'
    });

    $.get(tags_endpoint).done(tagSuccess).fail(tagFail);
});