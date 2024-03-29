# Generated by Django 5.0.2 on 2024-03-07 13:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sh', '0003_alter_employee_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='employee',
            name='status',
            field=models.CharField(choices=[('LICENCIA POR MATERNIDAD', 'LICENCIA POR MATERNIDAD'), ('JUBILACION EN TRAMITE', 'JUBILACION EN TRAMITE'), ('ACTIVO', 'ACTIVO'), ('BAJA O RETIRADO', 'BAJA O RETIRADO'), ('LICENCIA POR LARGO TRATAMIENTO', 'LICENCIA POR LARGO TRATAMIENTO')], default='ACTIVO', max_length=30, verbose_name='Estado'),
        ),
    ]
