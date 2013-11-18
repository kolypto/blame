$(function(){
    var $form = $('#step-form'),
  $processing = $('#step-processing'),
  $results = $('#step-results')
  ;

  $form.find('form').submit(function(){
      $form.hide('slow');
      $processing.show('slow');

      setTimeout(function(){
          $results
          .find('.projectName').text(
              $form.find('[name=project]').val()
          ).end()
          .find('.memberName').text(
              _(
                  $form.find('[name=members]').val().split("\n")
              ).chain()
              .compact()
              .sample()
              .value()
          );

          $processing.hide('slow');
          $results.show('slow');
      }, 5*1000);

      return false;
  });

  $results.find('.btn-default').click(function(){
      $form.show('fast');
      $results.hide('fast');
  });
});
