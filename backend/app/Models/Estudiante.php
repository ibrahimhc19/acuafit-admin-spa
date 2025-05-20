<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Estudiante extends Model
{
    use HasFactory;

    /**
     * El nombre de la tabla asociada con el modelo.
     *
     * @var string
     */
    protected $table = 'estudiantes';

    /**
     * La clave primaria para el modelo.
     *
     * @var string
     */
    protected $primaryKey = 'id';

    /**
     * Indica si la clave primaria es autoincremental.
     *
     * @var bool
     */
    public $incrementing = true;

    /**
     * El tipo de dato de la clave primaria.
     *
     * @var string
     */
    protected $keyType = 'int';

    /**
     * Indica si el modelo debe tener timestamps (created_at y updated_at).
     * Tu migración no incluye timestamps, así que lo ponemos a false si no los vas a añadir.
     * Si decides añadirlos a tu tabla, ponlo a true o elimina esta línea.
     *
     * @var bool
     */
    public $timestamps = false; // Asumiendo que no tienes created_at y updated_at

    /**
     * Los atributos que se pueden asignar masivamente.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'nombres',
        'apellidos',
        'tipo_documento',
        'edad',
        'documento_identidad',
        'representante_id',
        'sede_id',
        'horario_id',
        'fecha_inscripcion',
        'correo',
        'direccion',
        'telefono',
        'rut',
        'autoriza_uso_imagen',
        'acepta_reglamento',
        'observaciones',
    ];

    /**
     * Los atributos que deben ser casteados a tipos nativos.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'fecha_inscripcion' => 'date',
        'autoriza_uso_imagen' => 'boolean',
        'acepta_reglamento' => 'boolean',
        'edad' => 'integer',
        'representante_id' => 'integer',
        'sede_id' => 'integer',
        'horario_id' => 'integer',
    ];

    // Aquí puedes definir relaciones con otros modelos si es necesario
    // Por ejemplo, si tienes modelos Representante, Sede, Horario:
    public function representante()
    {
        return $this->belongsTo(Representante::class, 'representante_id');
    }

    public function sede()
    {
        return $this->belongsTo(Sede::class, 'sede_id');
    }

    public function horario()
    {
        return $this->belongsTo(Horario::class, 'horario_id');
    }
}
