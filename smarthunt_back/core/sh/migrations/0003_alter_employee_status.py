# Generated by Django 5.0.2 on 2024-03-06 22:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sh', '0002_alter_employee_status_alter_province_number_id_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='employee',
            name='status',
            field=models.CharField(choices=[('LICENCIA POR MATERNIDAD', 'LICENCIA POR MATERNIDAD'), ('ACTIVO', 'ACTIVO'), ('JUBILACION EN TRAMITE', 'JUBILACION EN TRAMITE'), ('BAJA O RETIRADO', 'BAJA O RETIRADO'), ('LICENCIA POR LARGO TRATAMIENTO', 'LICENCIA POR LARGO TRATAMIENTO')], default='ACTIVO', max_length=30, verbose_name='Estado'),
        ),
    ]